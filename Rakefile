desc "Test to ensure the site will compile from scratch"
task :test do
  FileUtils.rm_r('build') if File.exist?('build')
  sh "middleman", "build", "--verbose"
end

desc "Test Swagger files to ensure they pass specifications."
task :lint do
  require "open3"
  require "yaml"

  swagger_specs = `grep -l -r -i --include '*.yml' --include '*.json' swagger ./source ./build`.split("\n").reject do |line|
    line.start_with? "./build/vite"
  end
  if($?.exitstatus != 0)
    puts swagger_specs
    exit 1
  end

  errors = {}
  swagger_specs.each do |file|
    puts file

    # Validate the YAML with Ruby's validator. Note that this helps catch YAML
    # syntax errors that the swagger validator and NodeJS's YAML parser seem to
    # be okay with, but that the online swagger validator (which is apparently
    # Java) errors on.
    begin
      YAML.load_file(file)
    rescue => e
      output = "YAML error: #{e.message}"
      puts "#{output}\n\n\n"
      errors[file] = output
    end

    # Validate the swagger spec
    unless errors[file]
      output, status = Open3.capture2e("pnpm", "exec", "spectral", "lint", file)
      output = output.to_s.strip
      puts "#{output}\n\n\n"

      # swagger-tools doesn't exit with an unsuccessful code on warnings, so also
      # manually check the output.
      if !status.success?
        errors[file] = output
      end
    end
  end

  if(errors.any?)
    puts "===== ERROR: Swagger validation errors =====\n\n\n"
    errors.each do |file, output|
      puts "#{file}\n#{output}\n\n\n"
    end
    exit 1
  end
end

task :default => [:test, :lint]

require 'vite_padrino'
ViteRuby.install_tasks

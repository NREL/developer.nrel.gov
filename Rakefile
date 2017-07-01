desc "Test to ensure the site will compile from scratch"
task :test do
  FileUtils.rm_r('build') if File.exist?('build')
  exec("middleman build  --verbose")
end

desc "Test Swagger files to ensure they pass specifications."
task :lint do
  swagger_specs = `grep -l -r -i --include '*.yml' --include '*.json' swagger ./build`.split("\n")
  if($?.exitstatus != 0)
    puts swagger_specs
    exit 1
  end

  any_failed = false
  swagger_specs.each do |file|
    puts file
    ok = system("./node_modules/.bin/swagger-tools", "validate", "-v", file)
    if(!ok)
      any_failed = true
    end
  end

  if(any_failed)
    exit 1
  end
end

task :default => [:test, :lint]

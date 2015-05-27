require "middleman-gh-pages"

desc "Test to ensure the site will compile from scratch"
task :test do
  FileUtils.rm_r('build') if File.exist?('build')
  exec("middleman build  --verbose")
end

task :set_publish_swagger_host do
  ENV["SWAGGER_HOST"] = "https://devstage.nrel.gov"
  ENV["API_HOST"] = "https://devstage.nrel.gov/api"
end
task :publish => :set_publish_swagger_host

task :default => [:test]

desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Sync"
task :sync_data_gov do
  require "find"

  nrel_dir = File.expand_path("../content/docs", __FILE__)
  data_dir = File.expand_path("../../api.data.gov/content/docs/nrel", __FILE__)

  if(!File.exists?(data_dir))
    puts "api.data.gov project not where expected: #{data_dir}"
    exit
  end

  command = "rsync -av --delete-after #{nrel_dir}/ #{data_dir}/"
  puts command
  puts `#{command}`

  %w(api-key.md errors.md rate-limits.md).each do |file|
    File.delete("#{data_dir}/#{file}")
  end

  Find.find(data_dir) do |path|
    next unless File.file?(path)

    content = File.read(path)
    content.gsub!(%r{developer.nrel.gov/api/}, "api.data.gov/nrel/")

    puts path
    File.open(path, "w") { |f| f.write(content) }
  end
end

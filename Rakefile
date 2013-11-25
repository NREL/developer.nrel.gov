desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Sync"
task :sync_data_gov do
  require "find"
  require "nanoc"

  site = Nanoc::Site.new('.')

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

  nrel_doc_children = Dir.entries(data_dir) - [".", ".."]

  Find.find(data_dir) do |path|
    next unless(File.file?(path))

    extension = File.extname(path).gsub(/^\./, "")
    next unless(site.config[:text_extensions].include?(extension))

    puts path

    content = File.read(path)
    content.gsub!(%r{developer.nrel.gov/api/}, "api.data.gov/nrel/")
    content.gsub!(%r{/docs/(#{nrel_doc_children.join("|")})/}, '/docs/nrel/\1/')

    File.open(path, "w") { |f| f.write(content) }
  end

  FileUtils.rm_r('output') if File.exist?('output')
end

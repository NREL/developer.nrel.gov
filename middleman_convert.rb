#!/usr/bin/env ruby

require "find"

puts %x[rsync -av content/ source/]
puts %x[rm -rf content]
puts %x[git add source]
puts %x[perl -p -i -e 's/render\\("child_links"\\)/partial("layouts\\/child_links")/g' `ack -il render source`]
puts %x[perl -p -i -e 's/render\\("swagger_ie_warning"\\)/partial("layouts\\/swagger_ie_warning")/g' `ack -il render source`]
puts %x[perl -p -i -e 's/{{title}}/<%= current_page.data.title %>/g' `ack -il '{{' source`]
puts %x[perl -p -i -e 's/{{summary}}/<%= current_page.data.summary %>/g' `ack -il '{{' source`]
puts %x[perl -p -i -e 's/{{method}}/<%= current_page.data.method %>/g' `ack -il '{{' source`]
puts %x[perl -p -i -e 's/{{url}}/<%= current_page.data.url %>/g' `ack -il '{{' source`]

erb_files = `ack -l "<%" source`.strip.split(/\n/)
erb_files.each do |file|
  if(file !~ /\.erb$/)
    command = "git mv -f #{file} #{file}.erb"
    puts command.inspect
    `#{command}`
  end
end

Find.find("source") do |path|
  if(File.file?(path))
    next if(File.basename(path) =~ /^\./)
    next if(File.basename(path) =~ /api-docs\.json/)
    dir, extension = path.split(".", 2)
    if(File.directory?(dir))
      command = "git mv #{path} #{dir}/index.#{extension}"
      puts command
      `#{command}`
    end
  end
end

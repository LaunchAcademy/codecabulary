require 'active_support'
require 'active_support/core_ext/string'

task :wikify_filesystem do
  Dir.glob("codecabulary/**/*") do |filename|
    if File.directory?(filename)
      directory = filename
      puts "***#{File.basename(filename)}***"
      Dir.glob("codecabulary/#{File.basename(filename)}/**/*") do |markdown_file|
        title = File.basename(markdown_file, '.md').gsub('-', ' ').titleize
        puts "* [[#{title}|#{directory}/#{File.basename(markdown_file, '.md')}]]"
      end
      puts "***"
    end
  end
end

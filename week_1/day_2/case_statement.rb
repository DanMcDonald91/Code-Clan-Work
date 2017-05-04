score= 10
puts " what was your test score"
user_score = gets.chomp.to_i

case user_score
  when 10
    puts "genius"
  when 9
    puts " excellent"
  when 1 .. 5
    puts "fail"
  end



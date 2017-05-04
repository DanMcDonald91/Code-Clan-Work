my_number = 5
puts 'what number am i thinking of'
value = gets.to_i
while value !=my_number
  print 'nope try again'
  value gets.to_i
end
puts ' yes you got it'
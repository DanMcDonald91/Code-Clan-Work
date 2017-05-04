# Guitar
puts " What price is the guitar"
price = gets.chomp.to_i
price = 100
condition = " excellent"

if (price <= 500 && condition == "excellent")
  puts "buy the Guitar"
else 
  puts "dont buy Guitar"
end

if (price <=500 || condition == "excellent")
  puts " buy the Guitar"
else
  puts "dont buy the Guitar"
end

# # Revising Functions
# def welcome()
#   return " Allright mate!"
# end
# puts welcome()

# def greet()
#   words = " Whats happening cheif"
#   return words
# end
# puts greet 

def greet(name)
  return " Ah, if it isn't old"  + name
end
puts greet(' Shooter McGavin')

# Messy Way Of Doing This

# def greet(name ,time_of_day)
#   return "Good" +  time_of_day +  name
# end
# puts greet( " Dan" , " evening")

# Improved Way Of Doing This

# def greet(name , time_of_day)
#   return "good #{time_of_day} #{name.capitalize()}"
# end
# puts greet( "Dan" , "Morning")

# The Add Function
# def add(a , b)
#   return a + b
# end
# puts " Two Plus Three is #{add(2,3)}"

# The Population Density Function
def population_density(population , area)
  return population / area.to_f
  end
  puts "population of costa rica is #{ population_density(4872000,51100) }"




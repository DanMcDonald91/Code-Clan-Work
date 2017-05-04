require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(search_name)
   found_pet = @pets.find() {|pet| pet.name == search_name}
   return found_pet.type
  end
def gets_names_of_all_type(type_search)
 filtered_pets = @pets.select() {|pet| pet.type == type_search}
 return filtered_pets.collect() { |dog| dog.name}
end

  def gets_number_of_pets_costing_at_least(cost)
   return @pets.count{|pet| pet.price >= cost}
  end




end
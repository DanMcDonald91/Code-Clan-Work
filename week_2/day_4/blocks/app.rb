def map( items)
  result = []
  for item in items
    result << yield(item)
end
return result
end



def up_to_you_hello
  name = "rick"
  return yield( name)
end




  
  def up_to_you
    return yield
  end


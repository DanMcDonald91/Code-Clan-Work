require "sinatra"
require "sinatra/contrib/all"

get "/" do
 return "Hello Daniel McD "
end

get "/roll-die" do
  "rolling the die...#{rand(1..6)}"
end

get "/name/:first/:last" do
  return "Hello #{params[:first]} #{params[:last]}"
end


get "/captains/:number" do
captains = ["Kirk", "Picard", "Janeway", "Sisko"]
index = params["number"].to_i
return captains[index]
end
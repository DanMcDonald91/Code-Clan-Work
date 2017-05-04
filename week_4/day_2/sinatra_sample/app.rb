require "sinatra"
require "sinatra/contrib/all"

get "/" do
return  "Hello World"
end

get "/hello/:name" do
return "Hello #{params[:first_name]} #{params[:last_name]}"
end

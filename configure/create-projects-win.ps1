Write-Host "About to Create the directory" -ForegroundColor Green

mkdir WebAPI
cd WebAPI

Write-Host "About to create the solution and projects" -ForegroundColor Green
dotnet new sln
dotnet new webapi -n GraminVikas.API
dotnet new classlib -n GraminVikas.Application
dotnet new classlib -n GraminVikas.Domain
dotnet new classlib -n GraminVikas.Persistence

Write-Host "Adding projects to the solution" -ForegroundColor Green
dotnet sln add GraminVikas.API/GraminVikas.API.csproj
dotnet sln add GraminVikas.Application/GraminVikas.Application.csproj
dotnet sln add GraminVikas.Domain/GraminVikas.Domain.csproj
dotnet sln add GraminVikas.Persistence/GraminVikas.Persistence.csproj

Write-Host "Adding project references" -ForegroundColor Green
cd GraminVikas.API
dotnet add reference ../GraminVikas.Application/GraminVikas.Application.csproj
cd ../GraminVikas.Application
dotnet add reference ../GraminVikas.Domain/GraminVikas.Domain.csproj
dotnet add reference ../GraminVikas.Persistence/GraminVikas.Persistence.csproj
cd ../GraminVikas.Persistence
dotnet add reference ../GraminVikas.Domain/GraminVikas.Domain.csproj
cd ..

Write-Host "Executing dotnet restore" -ForegroundColor Green
dotnet restore

Write-Host "Finished!" -ForegroundColor Green

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GraminVikas.Web.Data
{

    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("UserClaims");
            });
          
            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("UserRoles");
            });
           
            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("UserLogins");
            });
          
            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("Roles");
            });
        
            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("Users");
            });
        }

    }

}
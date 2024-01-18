namespace GraminVikas.Web.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string? Name { get; set; }
       
        public string? FatherName { get; set; }
       public int FromYear { get; set; }

        public int ToYear { get; set; }
        public string? AboutText { get; set; }
    }
}

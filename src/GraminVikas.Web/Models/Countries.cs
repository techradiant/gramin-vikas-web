namespace GraminVikas.Web.Models
{
    public class Countries
    {

        public int CountryId { get; set; }
        public string CountryName { get; set; }
        public string CountryDescription { get; set; }
        public string CountryCode { get; set; }
        public Countries() { }

    }

    public class Cities
    { 
      public int CityId { get; set; }
        public string? CityName { get; set; }

        public int state_id { get; set; }
        public int state_code { get; set; }
        public int country_id { get; set; }
        public int country_code { get; set; }

        public decimal latitude { get; set; }
        public decimal longitude { get; set; }

        public int created_at { get; set; }

        public int updated_at { get; set; }

        public string? flag { get; set; }

    }
}

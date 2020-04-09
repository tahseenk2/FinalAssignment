using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveAPI.Models
{
    public class Approve
    {
        [Key]
        public int a_id { get; set; }
        public int? empId { get; set; }
        [ForeignKey("empId")]
        public virtual Employee Employee { get; set; }
        public int? lId { get; set; }
        [ForeignKey("lId")]
        public Leave Leave { get; set; }
        public string a_start { get; set; }
        public string a_end { get; set; }
        public string a_status { get; set; }
    }
}

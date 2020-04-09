using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveAPI.Models
{
    public class Leave
    {
        [Key]
        public int leave_id { get; set; }
        public string leave_name { get; set; }
        public int alloweddays { get; set; }
    }
}

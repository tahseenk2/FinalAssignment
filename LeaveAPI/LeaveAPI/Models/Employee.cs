using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveAPI.Models
{
    public class Employee
    {
        [Key]
        public int emp_id { get; set; }
        public string emp_name { get; set; }
        public string emp_dob { get; set; }
        public string emp_doj { get; set; }
        public int emp_salary { get; set; }
        public string emp_email { get; set; }

    }
}

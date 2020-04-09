using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveAPI.Models
{
    public class AproveGetModel
    {
        public int aid { get; set; }
        public int employeeId { get; set; }
        public string employee_name { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public int totaldays { get; set; }
        public int leaveId { get; set; }
        public string leaveName { get; set; }
        public int leaveDay { get; set; }
        public string status { get; set; }
    }
}

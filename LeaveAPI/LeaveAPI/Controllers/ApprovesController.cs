using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeaveAPI.Models;

namespace LeaveAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprovesController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public ApprovesController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/Approves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AproveGetModel>>> GetApproveLeave()
        {
            var result = (from a in _context.ApproveLeave
                          select new AproveGetModel
                          {
                              aid = a.a_id,
                              employeeId=a.Employee.emp_id,
                              employee_name = a.Employee.emp_name,
                              start = a.a_start,
                              end = a.a_end,
                              totaldays = a.Leave.alloweddays,
                              leaveId = a.Leave.leave_id,
                              leaveName = a.Leave.leave_name,
                              leaveDay = 0,
                              status = a.a_status
                          });
            return await result.ToListAsync();
        }

        // GET: api/Approves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Approve>> GetApprove(int id)
        {
            var approve = await _context.ApproveLeave.FindAsync(id);

            if (approve == null)
            {
                return NotFound();
            }

            return approve;
        }

        // PUT: api/Approves/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApprove(int id, Approve approve)
        {
            if (id != approve.a_id)
            {
                return BadRequest();
            }

            _context.Entry(approve).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApproveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Approves
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Approve>> PostApprove(Approve approve)
        {
            _context.ApproveLeave.Add(approve);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetApprove", new { id = approve.a_id }, approve);
        }

        // DELETE: api/Approves/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Approve>> DeleteApprove(int id)
        {
            var approve = await _context.ApproveLeave.FindAsync(id);
            if (approve == null)
            {
                return NotFound();
            }

            _context.ApproveLeave.Remove(approve);
            await _context.SaveChangesAsync();

            return approve;
        }

        private bool ApproveExists(int id)
        {
            return _context.ApproveLeave.Any(e => e.a_id == id);
        }
    }
}

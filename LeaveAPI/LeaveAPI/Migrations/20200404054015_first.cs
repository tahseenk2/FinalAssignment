using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveAPI.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    emp_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    emp_name = table.Column<string>(nullable: true),
                    emp_dob = table.Column<string>(nullable: true),
                    emp_doj = table.Column<string>(nullable: true),
                    emp_salary = table.Column<int>(nullable: false),
                    emp_email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.emp_id);
                });

            migrationBuilder.CreateTable(
                name: "Leave",
                columns: table => new
                {
                    leave_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    leave_name = table.Column<string>(nullable: true),
                    alloweddays = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leave", x => x.leave_id);
                });

            migrationBuilder.CreateTable(
                name: "ApproveLeave",
                columns: table => new
                {
                    a_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employeeemp_id = table.Column<int>(nullable: true),
                    leave_id = table.Column<int>(nullable: true),
                    a_start = table.Column<string>(nullable: true),
                    a_end = table.Column<string>(nullable: true),
                    a_status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApproveLeave", x => x.a_id);
                    table.ForeignKey(
                        name: "FK_ApproveLeave_Employee_Employeeemp_id",
                        column: x => x.Employeeemp_id,
                        principalTable: "Employee",
                        principalColumn: "emp_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ApproveLeave_Leave_leave_id",
                        column: x => x.leave_id,
                        principalTable: "Leave",
                        principalColumn: "leave_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_Employeeemp_id",
                table: "ApproveLeave",
                column: "Employeeemp_id");

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_leave_id",
                table: "ApproveLeave",
                column: "leave_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApproveLeave");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Leave");
        }
    }
}

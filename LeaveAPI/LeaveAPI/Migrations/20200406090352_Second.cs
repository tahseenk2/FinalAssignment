using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveAPI.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApproveLeave_Employee_Employeeemp_id",
                table: "ApproveLeave");

            migrationBuilder.DropForeignKey(
                name: "FK_ApproveLeave_Leave_leave_id",
                table: "ApproveLeave");

            migrationBuilder.DropIndex(
                name: "IX_ApproveLeave_Employeeemp_id",
                table: "ApproveLeave");

            migrationBuilder.DropIndex(
                name: "IX_ApproveLeave_leave_id",
                table: "ApproveLeave");

            migrationBuilder.DropColumn(
                name: "Employeeemp_id",
                table: "ApproveLeave");

            migrationBuilder.DropColumn(
                name: "leave_id",
                table: "ApproveLeave");

            migrationBuilder.AddColumn<int>(
                name: "empId",
                table: "ApproveLeave",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "lId",
                table: "ApproveLeave",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_empId",
                table: "ApproveLeave",
                column: "empId");

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_lId",
                table: "ApproveLeave",
                column: "lId");

            migrationBuilder.AddForeignKey(
                name: "FK_ApproveLeave_Employee_empId",
                table: "ApproveLeave",
                column: "empId",
                principalTable: "Employee",
                principalColumn: "emp_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ApproveLeave_Leave_lId",
                table: "ApproveLeave",
                column: "lId",
                principalTable: "Leave",
                principalColumn: "leave_id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ApproveLeave_Employee_empId",
                table: "ApproveLeave");

            migrationBuilder.DropForeignKey(
                name: "FK_ApproveLeave_Leave_lId",
                table: "ApproveLeave");

            migrationBuilder.DropIndex(
                name: "IX_ApproveLeave_empId",
                table: "ApproveLeave");

            migrationBuilder.DropIndex(
                name: "IX_ApproveLeave_lId",
                table: "ApproveLeave");

            migrationBuilder.DropColumn(
                name: "empId",
                table: "ApproveLeave");

            migrationBuilder.DropColumn(
                name: "lId",
                table: "ApproveLeave");

            migrationBuilder.AddColumn<int>(
                name: "Employeeemp_id",
                table: "ApproveLeave",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "leave_id",
                table: "ApproveLeave",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_Employeeemp_id",
                table: "ApproveLeave",
                column: "Employeeemp_id");

            migrationBuilder.CreateIndex(
                name: "IX_ApproveLeave_leave_id",
                table: "ApproveLeave",
                column: "leave_id");

            migrationBuilder.AddForeignKey(
                name: "FK_ApproveLeave_Employee_Employeeemp_id",
                table: "ApproveLeave",
                column: "Employeeemp_id",
                principalTable: "Employee",
                principalColumn: "emp_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ApproveLeave_Leave_leave_id",
                table: "ApproveLeave",
                column: "leave_id",
                principalTable: "Leave",
                principalColumn: "leave_id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

﻿// <auto-generated />
using System;
using LeaveAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LeaveAPI.Migrations
{
    [DbContext(typeof(EmployeeContext))]
    partial class EmployeeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LeaveAPI.Models.Approve", b =>
                {
                    b.Property<int>("a_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("a_end")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("a_start")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("a_status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("empId")
                        .HasColumnType("int");

                    b.Property<int?>("lId")
                        .HasColumnType("int");

                    b.HasKey("a_id");

                    b.HasIndex("empId");

                    b.HasIndex("lId");

                    b.ToTable("ApproveLeave");
                });

            modelBuilder.Entity("LeaveAPI.Models.Employee", b =>
                {
                    b.Property<int>("emp_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("emp_dob")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emp_doj")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emp_email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emp_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("emp_salary")
                        .HasColumnType("int");

                    b.HasKey("emp_id");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("LeaveAPI.Models.Leave", b =>
                {
                    b.Property<int>("leave_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("alloweddays")
                        .HasColumnType("int");

                    b.Property<string>("leave_name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("leave_id");

                    b.ToTable("Leave");
                });

            modelBuilder.Entity("LeaveAPI.Models.Approve", b =>
                {
                    b.HasOne("LeaveAPI.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("empId");

                    b.HasOne("LeaveAPI.Models.Leave", "Leave")
                        .WithMany()
                        .HasForeignKey("lId");
                });
#pragma warning restore 612, 618
        }
    }
}

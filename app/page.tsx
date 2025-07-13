"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, CheckCircle, Clock, Briefcase, Target, TrendingUp } from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Tasks Completed",
      value: "12",
      total: "18",
      percentage: 67,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Job Applications",
      value: "8",
      total: "15",
      percentage: 53,
      icon: Briefcase,
      color: "text-blue-600",
    },
    {
      title: "Upcoming Deadlines",
      value: "5",
      total: "",
      percentage: 0,
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Weekly Goal",
      value: "85%",
      total: "",
      percentage: 85,
      icon: Target,
      color: "text-purple-600",
    },
  ]

  const recentTasks = [
    { title: "Complete React Assignment", status: "completed", priority: "high" },
    { title: "Apply to Google Internship", status: "in-progress", priority: "high" },
    { title: "Study for Algorithms Exam", status: "todo", priority: "medium" },
    { title: "Update Portfolio Website", status: "in-progress", priority: "low" },
  ]

  const upcomingDeadlines = [
    { title: "CS Project Submission", date: "Dec 15", type: "assignment" },
    { title: "Microsoft Application", date: "Dec 18", type: "job" },
    { title: "Final Exam - Database", date: "Dec 20", type: "exam" },
    { title: "Internship Interview", date: "Dec 22", type: "interview" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your productivity overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value}
                {stat.total && <span className="text-sm text-muted-foreground">/{stat.total}</span>}
              </div>
              {stat.percentage > 0 && <Progress value={stat.percentage} className="mt-2" />}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recent Tasks
            </CardTitle>
            <CardDescription>Your latest task activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{task.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={
                        task.status === "completed"
                          ? "default"
                          : task.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {task.status.replace("-", " ")}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        task.priority === "high"
                          ? "border-red-200 text-red-700"
                          : task.priority === "medium"
                            ? "border-yellow-200 text-yellow-700"
                            : "border-green-200 text-green-700"
                      }`}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
            <CardDescription>Don't miss these important dates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{deadline.title}</p>
                  <p className="text-sm text-muted-foreground">{deadline.date}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {deadline.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Jump into your most common tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <p className="font-medium">Add New Task</p>
                <p className="text-sm text-muted-foreground">Create a task in your board</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4 text-center">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-medium">Track Application</p>
                <p className="text-sm text-muted-foreground">Add a new job application</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-accent transition-colors">
              <CardContent className="p-4 text-center">
                <CalendarDays className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium">Set Deadline</p>
                <p className="text-sm text-muted-foreground">Add important dates</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

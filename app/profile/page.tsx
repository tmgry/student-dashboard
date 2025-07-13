"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Award, Settings } from "lucide-react"

export default function ProfilePage() {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 65 },
    { name: "Java", level: 60 },
  ]

  const achievements = [
    { title: "Dean's List", description: "Fall 2024 Semester", date: "Dec 2024" },
    { title: "Hackathon Winner", description: "First place at University Hackathon", date: "Nov 2024" },
    { title: "Scholarship Recipient", description: "Merit-based scholarship award", date: "Sep 2024" },
    { title: "Research Assistant", description: "AI/ML Research Lab", date: "Aug 2024" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-2xl">JS</AvatarFallback>
              </Avatar>
              <CardTitle>John Smith</CardTitle>
              <p className="text-muted-foreground">Computer Science Student</p>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="secondary">Senior</Badge>
                <Badge variant="outline">CS Major</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>john.smith@university.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Graduating May 2025</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">GPA</span>
                <Badge variant="outline">3.8/4.0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Completed Tasks</span>
                <Badge variant="outline">47</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Job Applications</span>
                <Badge variant="outline">12</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Interviews</span>
                <Badge variant="outline">5</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Smith" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.smith@university.edu" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      defaultValue="Computer Science student passionate about software development and AI. Looking for internship opportunities in tech."
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Academic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="university">University</Label>
                      <Input id="university" defaultValue="Stanford University" />
                    </div>
                    <div>
                      <Label htmlFor="major">Major</Label>
                      <Input id="major" defaultValue="Computer Science" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input id="year" defaultValue="Senior" />
                    </div>
                    <div>
                      <Label htmlFor="gpa">GPA</Label>
                      <Input id="gpa" defaultValue="3.8" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="graduation">Expected Graduation</Label>
                    <Input id="graduation" defaultValue="May 2025" />
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Achievements
                    </h4>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium">{achievement.title}</h5>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                            <Badge variant="outline">{achievement.date}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Skills & Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4">Technical Skills</h4>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">AWS Cloud Practitioner</Badge>
                      <Badge variant="secondary">Google Analytics</Badge>
                      <Badge variant="secondary">Scrum Master</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">English (Native)</Badge>
                      <Badge variant="outline">Spanish (Intermediate)</Badge>
                      <Badge variant="outline">Mandarin (Beginner)</Badge>
                    </div>
                  </div>

                  <Button>Update Skills</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Task Reminders</p>
                          <p className="text-sm text-muted-foreground">Get notified about upcoming deadlines</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Job Application Updates</p>
                          <p className="text-sm text-muted-foreground">
                            Notifications about application status changes
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Privacy</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Private
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Data Export</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download your data including tasks, applications, and calendar events
                    </p>
                    <Button variant="outline">Export Data</Button>
                  </div>

                  <Button>Save Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

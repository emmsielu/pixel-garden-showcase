
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import ProjectCard from "@/components/ProjectCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const exampleProject = {
  id: "demo",
  title: "Sample Project Title",
  subtitle: "Project Subtitle",
  imageUrl: "/placeholder.svg",
  description: "A short description of the project goes here. Showcases how the ProjectCard component appears.",
};

const DesignSystem = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
    <h1 className="text-5xl font-bold mb-10 text-center">Design System</h1>
    <div className="space-y-16">

      {/* Typography */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Typography</h2>
        <div className="space-y-2">
          <div>
            <label className="text-muted-foreground block mb-1">H1 (Page Title)</label>
            <h1 className="text-5xl font-bold font-serif text-primary">This is a Page Title</h1>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">H2 (Section Heading)</label>
            <h2 className="text-3xl font-bold font-serif text-primary">This is a Section Heading</h2>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">H3 (Sub-heading / Card Title / Project name)</label>
            <h3 className="font-sans text-muted-foreground text-xl font-normal">This is a Sub-heading</h3>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Muted Paragraph</label>
            <p className="text-muted-foreground">This is a muted paragraph using <code>text-muted-foreground</code>.</p>
          </div>
          <div>
            <label className="text-muted-foreground block mb-1">Normal Paragraph</label>
            <p>This is a normal paragraph of body text showing default font and sizing.</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Primary</label>
            <Button>Primary Button</Button>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Secondary</label>
            <Button variant="secondary">Secondary Button</Button>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Outline</label>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Destructive</label>
            <Button variant="destructive">Destructive Button</Button>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Ghost</label>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Link</label>
            <Button variant="link">Link Button</Button>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Badges</h2>
        <div className="flex gap-4 flex-wrap">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Default</label>
            <Badge>Default</Badge>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Secondary</label>
            <Badge variant="secondary">Secondary</Badge>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Destructive</label>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Outline</label>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Form Elements</h2>
        <div className="flex items-center gap-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Checkbox</label>
            <Checkbox id="demo-checkbox" checked={true} readOnly />
          </div>
        </div>
      </section>

      {/* Cards and ProjectCard */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Cards & ProjectCard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">UI Card</label>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a card body. Useful for grouping related elements.</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">ProjectCard</label>
            <ProjectCard {...exampleProject} showReadMore />
          </div>
        </div>
      </section>

    </div>
  </div>
);

export default DesignSystem;

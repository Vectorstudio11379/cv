import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import { SplineModel } from "@/components/SplineModel";
import { ArrowUpRight } from "lucide-react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <section
        style={{
          minHeight: "100vh",
          width: "100vw",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Centered: Timi Portfolio above iDESIGNER */}
        <div style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          marginBottom: 0,
        }}>
          <div style={{
            fontSize: 24,
            fontWeight: 400,
            opacity: 0.85,
            marginBottom: 8,
            letterSpacing: 1,
            color: "var(--neutral-on-background-strong)",
          }}>
            Timi Portfolio
          </div>
          <h1
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "14vw",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "var(--neutral-on-background-strong)",
              opacity: 0.95,
              textTransform: "none",
              margin: 0,
              lineHeight: 1,
              textAlign: "center",
              userSelect: "none",
            }}
          >
            iDESIGNER
          </h1>
        </div>
        {/* Spline Model Centered and Large */}
        <div style={{ position: "relative", zIndex: 2, width: "min(900px, 80vw)", margin: "-110px auto 0 auto" }}>
          <SplineModel
            scene="https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode"
            style={{ height: "90vh", minHeight: 600, background: "none" }}
          />
          <div style={{ marginTop: 24, fontSize: 22, textAlign: "center", color: "var(--neutral-on-background-strong)" }}>
            {home.subline}
          </div>
        </div>
        {/* Arrow button bottom right */}
        <a
          href="#main-content"
          style={{
            position: "absolute",
            bottom: 48,
            right: 64,
            background: "#fff",
            color: "#000",
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            zIndex: 3,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          aria-label="Scroll down"
        >
          <ArrowUpRight size={28} />
        </a>
      </section>
      {/* MAIN CONTENT */}
      <Column id="main-content" maxWidth="m" horizontal="center" style={{marginTop: 0, paddingTop: 0, position: "relative", zIndex: 3}}>
        <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx>
        {routes["/blog"] && (
          <Flex fillWidth gap="24" mobileDirection="column">
            <Flex flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Flex>
            <Flex flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        )}
        <Projects range={[2]} />
        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </Column>
    </Column>
  );
}

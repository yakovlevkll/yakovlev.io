import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { config } from '@config'
import { recs } from '@data'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: config['uses.title'],
  description: config['uses.heading'],
}

export default function Uses() {
  return (
    <SimpleLayout
      title={config['uses.heading']}
      intro={config['uses.description']}
    >
      <div className="space-y-20">
        {recs.map((section) => (
          <ToolsSection title={section.title} key={section.title}>
            {section.items.map((item) => (
              <Tool title={item.name} key={item.name}>
                {item.reason}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}

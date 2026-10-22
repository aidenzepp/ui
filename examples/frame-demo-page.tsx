import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Frame, FrameActions, FrameDescription, FrameFooter, FrameHeader, FramePanel, FrameTitle } from "@/components/ui/frame"
import { OverflowFrame } from "./overflow-frame"

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 bg-background p-8 text-foreground">
      <Frame id="basic">
        <FrameHeader>
          <FrameTitle>Notifications</FrameTitle>
          <FrameActions>
            <Button variant="ghost" size="sm">Reset</Button>
          </FrameActions>
        </FrameHeader>
        <FramePanel className="min-h-48">
          <label className="flex items-center gap-3 text-sm">
            <Switch defaultChecked /> Email me a weekly digest
          </label>
        </FramePanel>
        <FrameFooter>
          <FrameDescription>Installed via npx shadcn add @aidenzepp/frame</FrameDescription>
          <FrameActions>
            <Button variant="outline">Cancel</Button>
            <Button>Save changes</Button>
          </FrameActions>
        </FrameFooter>
      </Frame>
      <div className="flex flex-col gap-8">
        <OverflowFrame id="wide" />
        <div style={{ width: 340 }}><OverflowFrame id="narrow" /></div>
      </div>
    </main>
  )
}

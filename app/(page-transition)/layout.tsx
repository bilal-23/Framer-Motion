export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex flex-col gap-8 p-10">{children}</main>
}

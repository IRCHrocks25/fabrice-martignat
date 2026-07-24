export default function Cursor() {
  return (
    <div className="relative size-full" data-name="cursor">
      <div className="absolute bg-[red] h-[23.48px] left-0 top-0 w-[11.738px]" />
      <div className="absolute flex h-[11.738px] items-center justify-center left-[11.74px] top-[23.48px] w-[23.475px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[red] h-[23.475px] w-[11.738px]" />
        </div>
      </div>
    </div>
  );
}
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className=" bg-white flex flex-col space-y-3 border-3  border-2 min-h-auto md:min-h-[400px] w-full md:w-[30%] ">
      <Skeleton className="min-h-[200px] w-[90%]  rounded-xl m-3" />
      <div className="space-y-2 m-3">
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 " />
      </div>
    </div>
  )
}

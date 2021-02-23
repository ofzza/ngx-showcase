// Worker communication reusable types
// ----------------------------------------------------------------------------

export type TWorkerInvocationRequest = { id: number; method: string; args: Record<string, any>; streamPacketSize: number; streamPacketDelay: number };
export type TWorkerInvocationResponse = { id: number; success: boolean; result: string; streaming: number[] | false };

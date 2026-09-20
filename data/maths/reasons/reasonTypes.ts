import { reasonBank } from './reasonBank';
export type ReasonId = keyof typeof reasonBank;
export type ParallelReasonId = Extract<ReasonId, `parallel.${string}`>;
export type ReasonOptions<I extends ReasonId> = I extends ParallelReasonId
  ? { params: { line1: string; line2: string }; variant?: string }
  : { params?: Record<string, string>; variant?: string };
export type ReasonUse = { [I in ReasonId]: { reasonId: I } & ReasonOptions<I> }[ReasonId];

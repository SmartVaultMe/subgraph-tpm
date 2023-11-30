import {
  Initialized as InitializedEvent,
  Locked as LockedEvent,
  Recovered as RecoveredEvent,
  RecoveryInitiated as RecoveryInitiatedEvent,
  Retired as RetiredEvent,
  Withdrawal as WithdrawalEvent,
  WithdrawalCancelled as WithdrawalCancelledEvent,
  WithdrawalInitiated as WithdrawalInitiatedEvent
} from "../generated/TimeCapsule/TimeCapsule"
import {
  Initialized,
  Locked,
  Recovered,
  RecoveryInitiated,
  Retired,
  Withdrawal,
  WithdrawalCancelled,
  WithdrawalInitiated
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLocked(event: LockedEvent): void {
  let entity = new Locked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.extERC20 = event.params.extERC20
  entity.amount = event.params.amount
  entity.fee = event.params.fee
  entity.lockTime = event.params.lockTime
  entity.unlockTime = event.params.unlockTime
  entity.autoLock = event.params.autoLock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRecovered(event: RecoveredEvent): void {
  let entity = new Recovered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRecoveryInitiated(event: RecoveryInitiatedEvent): void {
  let entity = new RecoveryInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRetired(event: RetiredEvent): void {
  let entity = new Retired(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.extERC20 = event.params.extERC20

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.extERC20 = event.params.extERC20
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalCancelled(
  event: WithdrawalCancelledEvent
): void {
  let entity = new WithdrawalCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.extERC20 = event.params.extERC20
  entity.lockIndex = event.params.lockIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalInitiated(
  event: WithdrawalInitiatedEvent
): void {
  let entity = new WithdrawalInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.extERC20 = event.params.extERC20
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

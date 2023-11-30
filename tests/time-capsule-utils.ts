import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  Locked,
  Recovered,
  RecoveryInitiated,
  Retired,
  Withdrawal,
  WithdrawalCancelled,
  WithdrawalInitiated
} from "../generated/TimeCapsule/TimeCapsule"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLockedEvent(
  extERC20: Address,
  amount: BigInt,
  fee: BigInt,
  lockTime: BigInt,
  unlockTime: BigInt,
  autoLock: boolean
): Locked {
  let lockedEvent = changetype<Locked>(newMockEvent())

  lockedEvent.parameters = new Array()

  lockedEvent.parameters.push(
    new ethereum.EventParam("extERC20", ethereum.Value.fromAddress(extERC20))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "lockTime",
      ethereum.Value.fromUnsignedBigInt(lockTime)
    )
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "unlockTime",
      ethereum.Value.fromUnsignedBigInt(unlockTime)
    )
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("autoLock", ethereum.Value.fromBoolean(autoLock))
  )

  return lockedEvent
}

export function createRecoveredEvent(): Recovered {
  let recoveredEvent = changetype<Recovered>(newMockEvent())

  recoveredEvent.parameters = new Array()

  return recoveredEvent
}

export function createRecoveryInitiatedEvent(): RecoveryInitiated {
  let recoveryInitiatedEvent = changetype<RecoveryInitiated>(newMockEvent())

  recoveryInitiatedEvent.parameters = new Array()

  return recoveryInitiatedEvent
}

export function createRetiredEvent(extERC20: Address): Retired {
  let retiredEvent = changetype<Retired>(newMockEvent())

  retiredEvent.parameters = new Array()

  retiredEvent.parameters.push(
    new ethereum.EventParam("extERC20", ethereum.Value.fromAddress(extERC20))
  )

  return retiredEvent
}

export function createWithdrawalEvent(
  extERC20: Address,
  amount: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam("extERC20", ethereum.Value.fromAddress(extERC20))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawalEvent
}

export function createWithdrawalCancelledEvent(
  extERC20: Address,
  lockIndex: BigInt
): WithdrawalCancelled {
  let withdrawalCancelledEvent = changetype<WithdrawalCancelled>(newMockEvent())

  withdrawalCancelledEvent.parameters = new Array()

  withdrawalCancelledEvent.parameters.push(
    new ethereum.EventParam("extERC20", ethereum.Value.fromAddress(extERC20))
  )
  withdrawalCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "lockIndex",
      ethereum.Value.fromUnsignedBigInt(lockIndex)
    )
  )

  return withdrawalCancelledEvent
}

export function createWithdrawalInitiatedEvent(
  extERC20: Address,
  amount: BigInt
): WithdrawalInitiated {
  let withdrawalInitiatedEvent = changetype<WithdrawalInitiated>(newMockEvent())

  withdrawalInitiatedEvent.parameters = new Array()

  withdrawalInitiatedEvent.parameters.push(
    new ethereum.EventParam("extERC20", ethereum.Value.fromAddress(extERC20))
  )
  withdrawalInitiatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawalInitiatedEvent
}

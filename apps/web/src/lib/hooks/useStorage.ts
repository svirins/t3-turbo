import { useAtom } from 'jotai'
import { atomWithStorage, RESET } from 'jotai/utils'


  const storedHomeGroupId = atomWithStorage("homeGroupId", "")
  const storedScheduledMeetingIds = atomWithStorage("myGroupsSchedule", [])


export function useHomeGroup() {
  const [homeGroupId, setHomeGroupId] = useAtom(storedHomeGroupId)
  return { homeGroupId, setHomeGroupId, RESET }
}


export function useScheduledMeetings() {
  const [meetingIds, setMeetingIds] = useAtom(storedScheduledMeetingIds)
  return { meetingIds, setMeetingIds, RESET }
}
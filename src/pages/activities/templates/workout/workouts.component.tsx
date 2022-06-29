import React, { useMemo, useState } from 'react'

import { Routes } from '../../../../enums/routes.enum'
import useTemplateWorkouts from '../../../../hooks/api/templates/workouts/useTemplateWorkouts'
import { useAuth } from '../../../../hooks/auth.hook'
import { getObjectFromArrays } from '../../../../utils/obj'
import TemplatesTable from '../components/template-table/template-table.component'

const LABELS = ['ID', 'Name', 'Created on', 'Created from client', 'Options']
const KEYS = ['id', 'name', 'created', 'client', 'options']

const convertDate = (dateString: string) => {
  const p = dateString.split(/\D/g)
  return [p[2], p[1], p[0]].join('-')
}

const MOBILE_LABELS: { [key: string]: string } = getObjectFromArrays(
  KEYS,
  LABELS
)

export default function Workouts() {
  const [search, setSearch] = useState('')
  const [client, setClient] = useState('all')

  const { id } = useAuth()
  const { workouts, meta, onPage } = useTemplateWorkouts({
    name: search,
    clientId: client
  })

  const data = useMemo(() => {
    const rows = workouts.map((item) => ({
      ...item,
      id: item?._id,
      created: convertDate(item?.created_at?.substring(0, 10)),
      type: item?.info?.type,
      client: item.account_id === id ? '-' : item.account?.user?.full_name
    }))
    return rows
  }, [workouts, search])

  const onSearch = (value: string) => {
    setSearch(value)
  }

  const onClient = (e: any) => {
    setClient(e)
  }

  return (
    <TemplatesTable
      onClient={onClient}
      onSearch={onSearch}
      keys={KEYS}
      labels={LABELS}
      data={data}
      mobileLabels={MOBILE_LABELS}
      baseLink={Routes.ACTIVITIES_TM_WO}
      meta={meta}
      onPage={onPage}
    />
  )
}

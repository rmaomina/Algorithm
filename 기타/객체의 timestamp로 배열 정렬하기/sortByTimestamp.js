// 객체의 timestamp로 배열 정렬하기

const record = [
  {
    name: 'fe-sprint-react-twittler-state-props',
    timestamp: '2022-08-02T14:37:15.141Z'
  },
  {
    name: 'fe-sprint-react-twittler-state-props',
    timestamp: '2022-08-03T02:23:26.496Z'
  },
  {
    name: 'fe-sprint-react-twittler-state-props',
    timestamp: '2022-08-03T10:36:50.156Z'
  },
  {
    name: 'fe-sprint-beesbeesbees',
    timestamp: '2022-07-25T05:49:43.405Z'
  },
  { name: 'fe-sprint-tree-ui', timestamp: '2022-08-22T06:48:03.715Z' },
  {
    name: 'fe-sprint-javascript-koans',
    timestamp: '2022-07-13T04:33:26.250Z'
  },
  {
    name: 'fe-sprint-react-twittler-spa',
    timestamp: '2022-08-01T06:02:26.902Z'
  },
  {
    name: 'fe-sprint-react-twittler-spa',
    timestamp: '2022-08-01T07:00:04.672Z'
  },
  {
    name: 'fe-sprint-react-twittler-intro',
    timestamp: '2022-07-29T07:38:43.367Z'
  },
  {
    name: 'fe-sprint-react-twittler-intro',
    timestamp: '2022-07-29T09:18:26.207Z'
  },
  {
    name: 'fe-sprint-async-and-promise',
    timestamp: '2022-07-28T09:17:43.103Z'
  },
  {
    name: 'fe-sprint-async-and-promise',
    timestamp: '2022-07-28T09:20:09.443Z'
  },
  {
    name: 'fe-sprint-async-and-promise',
    timestamp: '2022-07-28T10:52:06.821Z'
  },
  {
    name: 'fe-sprint-calculator',
    timestamp: '2022-07-06T07:50:17.412Z'
  },
  {
    name: 'fe-sprint-validation-check',
    timestamp: '2022-07-14T08:24:12.538Z'
  },
  {
    name: 'fe-sprint-validation-check',
    timestamp: '2022-07-15T01:43:04.570Z'
  },
  {
    name: 'fe-sprint-validation-check',
    timestamp: '2022-07-15T01:44:48.438Z'
  },
  {
    name: 'fe-sprint-statesairline-server',
    timestamp: '2022-08-12T17:41:02.682Z'
  },
  {
    name: 'fe-sprint-statesairline-server',
    timestamp: '2022-08-16T03:16:33.150Z'
  },
  {
    name: 'react-custom-component',
    timestamp: '2022-08-30T06:29:39.648Z'
  },
  {
    name: 'fe-sprint-stringify-json',
    timestamp: '2022-08-22T05:05:48.137Z'
  },
  { name: 'cmarket-redux', timestamp: '2022-09-02T05:52:05.442Z' },
  { name: 'fe-sprint-underbar', timestamp: '2022-07-26T05:56:18.648Z' },
  { name: 'fe-sprint-underbar', timestamp: '2022-07-26T07:57:45.303Z' },
  {
    name: 'fe-sprint-statesairline-client',
    timestamp: '2022-08-10T04:08:21.138Z'
  },
  {
    name: 'fe-sprint-cli-practice',
    timestamp: '2022-07-06T07:01:14.330Z'
  }
]

record.sort((a, b) => {
  return new Date(a.timestamp) - new Date(b.timestamp)
})

console.log(record)
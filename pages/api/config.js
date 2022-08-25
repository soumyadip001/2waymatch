export default function handler(req, res) {
  res.status(200).json({
    countries: [
      { key: 'IN', value: 'India' },
      { key: 'CA', value: 'Canada' },
      { key: 'USA', value: 'United States' },
    ],
    bloodGroups: [
      { key: 'A+', value: 'A+' },
      { key: 'A-', value: 'A-' },
      { key: 'AB', value: 'AB' },
      { key: 'B+', value: 'B+' },
      { key: 'B-', value: 'B-' },
      { key: 'O-', value: 'O-' },
      { key: 'O+', value: 'O+' },
    ]
  })
}

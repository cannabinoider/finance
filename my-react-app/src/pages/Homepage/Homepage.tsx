import React from 'react';
import SideNavbar from '../../components/HomepageComponents/navbar';
import Table from '../../components/HomepageComponents/table';

export default function Homepage() {
  return (
    <div className="">
    <SideNavbar />
    <div style={{ marginLeft: "240px", marginTop: "57px", padding: "24px" }}>
  <Table />
</div>

  </div>
  )
}

exports.toDateOnly = (date) => {
    const dt = new Date(date);
    return dt.getFullYear()+'-'+((dt.getMonth()+1)+'').padStart(2,'0')+'-'+(dt.getDate()+'').padStart(2,'0');
  }
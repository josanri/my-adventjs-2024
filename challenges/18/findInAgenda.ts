function findInAgenda(
  agenda: string,
  phone: string,
): { name: string | undefined; address: string | undefined } | null {
  const agendaSplit = agenda.split("\n");
  let resultsFound = 0;
  let result: { name: string; address: string } | null = null;
  const telRegex = /\+[\d]*\-[\d]*\-[\d]*\-[\d]*/;
  const nameRegex = /<([\w ]*)>/;
  agendaSplit.forEach((val) => {
    const tel: string = telRegex.exec(val)?.[0] as string;
    const names: RegExpExecArray = nameRegex.exec(val) as RegExpExecArray;
    const name_with: string = names[0];
    const name_without: string = names[1];
    const address: string = val.replace(tel, "").replace(name_with, "").trim();
    if (tel?.includes(phone)) {
      result = { address: address, name: name_without };
      resultsFound += 1;
    }
  });
  if (resultsFound != 1) {
    return null;
  }
  return result;
}

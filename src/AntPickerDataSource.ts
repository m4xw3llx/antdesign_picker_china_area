class AntPickerDataSource {
  public label: string;
  public value: object;
  public children: AntPickerDataSource[];

  constructor(label: string, value: object, children: AntPickerDataSource[]) {
    this.label = label;
    this.value = value;
    this.children = children;
  }
}

export default AntPickerDataSource;

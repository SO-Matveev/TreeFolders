export default interface Itree {
  name: string;
  type: string,
  show?: boolean;
  children?: Itree[];
}

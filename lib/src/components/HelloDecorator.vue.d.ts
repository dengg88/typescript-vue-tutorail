import { Vue } from "vue-property-decorator";
export default class HelloDecorator extends Vue {
    name: string;
    initialEnthusiasm: number;
    enthusiasm: number;
    increment(): void;
    decrement(): void;
    readonly exclamationMarks: string;
}

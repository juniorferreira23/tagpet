import { saveAnimal } from "../../services/saveData";
import * as S from "./styles"
import { registerAnimalFormSchema } from "./schemas";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AdoptionStackParamList } from "../../routes";
import { Form } from "../../components/Form";

type Props = NativeStackScreenProps<AdoptionStackParamList, "RegisterAnimal">;

export const RegisterAnimal = ({ navigation }: Props) => {
    return (
        <S.Container>
            <Form
                schemaZod={registerAnimalFormSchema}
                navigation={() => navigation.navigate("Home")}
                type="register"
                saveAnimal={saveAnimal}
                
            />
        </S.Container>
    );
}
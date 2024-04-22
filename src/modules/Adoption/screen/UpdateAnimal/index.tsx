import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles"
import { Form } from "../../components/Form";
import { updateAnimalFormSchema } from "./schemas";
import { putAnimal } from "../../services/putData";
import { DashboardStackParamList } from "../../routes/stack.routes";

type Props = NativeStackScreenProps<DashboardStackParamList, "UpdateAnimal">;

export const UpdateAnimal = ({ navigation, route }: Props) => {
    return (
        <S.Container>
            <Form
                schemaZod={updateAnimalFormSchema}
                navigation={() => navigation.navigate("Dashboard")}
                type="update"
                updateAnimal={putAnimal}
                objectId={route.params.id}
            />
        </S.Container>
    );
}
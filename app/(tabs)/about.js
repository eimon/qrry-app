import { ScrollView, Text } from "react-native";
import { Link } from 'expo-router';
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">Acerca de Qrry</Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tellus
          posuere, mattis turpis nec, consectetur magna. Donec ac libero
          hendrerit, vestibulum lectus id, consectetur ipsum. Praesent posuere
          metus quis quam ultricies, eu hendrerit nunc ullamcorper. Nullam
          vehicula aliquet tortor a commodo. Nunc sed varius dolor, in fringilla
          neque. Ut aliquet sapien vel vulputate interdum. Cras rhoncus rhoncus
          auctor. Integer congue sagittis iaculis. Suspendisse ut quam sapien.
          Quisque eget mauris aliquet, luctus metus ut, rhoncus leo. Mauris
          pharetra neque eu lorem sagittis scelerisque. Fusce finibus tincidunt
          risus pulvinar blandit. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Proin nisi ex, suscipit nec
          augue ac, auctor tristique ante. Curabitur ultricies felis vitae ex
          cursus eleifend hendrerit in sapien. Praesent ac justo convallis, rutrum
          massa a, ullamcorper mi. Nullam nisl lorem, malesuada vitae ullamcorper
          non, suscipit ornare nunc. Nam vehicula, tellus ac imperdiet semper,
          ipsum tellus finibus sapien, nec tristique dolor odio in augue. Proin
          aliquam ipsum sed augue elementum laoreet. Nam in tellus nibh. Sed
          commodo quam hendrerit, faucibus velit at, aliquet orci. Vivamus lacinia
          ullamcorper cursus. In quis elementum velit. Sed faucibus, magna id
          rutrum fringilla, metus ante gravida sem, id sagittis odio felis vel
          orci. Curabitur consequat luctus ligula feugiat laoreet. Pellentesque ac
          augue ut elit efficitur aliquet eu a sapien. Morbi id hendrerit velit.
          Maecenas ac dolor eu tellus egestas pharetra id molestie lectus. Proin
          sodales sed risus a cursus. Vestibulum vestibulum cursus libero, vel
          posuere felis. Etiam aliquam rutrum ante, accumsan ultricies lectus
          ornare eu. Proin vitae interdum tortor, non condimentum diam. Aenean
          quis posuere justo. In vitae feugiat nulla. Ut eget ullamcorper sapien,
          iaculis congue nisi. Pellentesque a neque at libero lacinia placerat.
          Vestibulum mollis euismod velit, id imperdiet diam porta sed. Morbi
          velit mi, accumsan et vulputate quis, congue non nibh. Fusce laoreet
          nibh non finibus consequat. Nam quis turpis mollis, varius velit
          molestie, fringilla velit. Donec dictum orci eu sem ornare congue. Nam
          porttitor congue risus eu egestas. Donec nibh odio, luctus sit amet
          ipsum in, ullamcorper pharetra arcu. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget
          consectetur lorem. Pellentesque nibh felis, ultrices nec nulla eu,
          imperdiet iaculis lacus. Ut ut tellus vitae libero tincidunt lacinia et
          sed nisi. Fusce commodo ipsum imperdiet, luctus nunc et, lacinia arcu.
          Proin a felis orci. Integer non metus aliquam, commodo purus fringilla,
          cursus lacus. Aliquam porttitor mauris sit amet laoreet suscipit. Donec
          ultricies nunc tortor, sed auctor sem fermentum ac. Praesent ex nibh,
          dapibus eget erat et, volutpat varius tellus. Aenean rhoncus rutrum
          neque quis gravida. Quisque interdum est nec odio vehicula ullamcorper
          ac ut leo. Nunc ut tortor feugiat, auctor sapien a, pharetra lectus.
          Nulla eleifend sit amet turpis ac dapibus. Curabitur quis hendrerit
          arcu, sed cursus nunc. Sed dapibus nisi eget iaculis tincidunt. Vivamus
          mattis viverra semper. Integer condimentum blandit eleifend. Phasellus
          gravida ac arcu a porta.
        </Text>
        <Link href="/" className='pt-3'>
          <HomeIcon />
        </Link>
      </ScrollView>
    </Screen>
  );
}

import { Flex, Heading, Text } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {

	const t = await getTranslations();
	const { gallery } = renderContent(t);

	const title = gallery.title;
	const description = gallery.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/gallery`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Gallery(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { gallery, person } = renderContent(t);
    return (
        <Flex fillWidth direction="column" alignItems="center">
            <Flex
                direction="column"
                maxWidth="s"
                paddingX="l"
                paddingTop="xl"
                paddingBottom="xl"
                gap="m"
                alignItems="center">
                <Heading variant="display-strong-s" align="center">
                    👋 Un petit bout de moi...
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    align="center">
                    Si on devait me résumer en quelques mots dans la vie de tous les jours, ce serait le sourire et le partage. Je suis cette personne qui cherche toujours à glisser une touche d'humour dans le quotidien, à faire rire mes proches et à savourer chaque instant passé avec eux. Pour moi, le bonheur est fait de ces moments simples et partagés.
                </Text>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    align="center">
                    À côté de ça, j'ai deux grands amours : les planches et l'eau.
                </Text>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    align="center">
                    Le théâtre m'accompagne depuis des années. Monter sur scène, incarner des personnages, vibrer avec le public... c'est une passion qui me fait vibrer. J'ai même eu la chance immense de vivre l'effervescence du Festival d'Avignon de l'intérieur sur deux années consécutives — j'ai prospecté et affiché pour plusieurs compagnies de théâtre, un souvenir magique gravé à jamais qui m'a permis de côtoyer ce monde artistique de si près.
                </Text>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    align="center">
                    Et quand le besoin de m'échapper se fait sentir, je plonge. La natation est ma bulle d'air, et la mer est, à mes yeux, le plus beau paysage qui soit. C'est face à l'horizon que je me ressource, que je déconnecte et que je retrouve toute mon énergie.
                </Text>
            </Flex>
            <script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ImageGallery',
						name: gallery.title,
						description: gallery.description,
						url: `https://${baseURL}/gallery`,
						image: gallery.images.map((image) => ({
                            '@type': 'ImageObject',
                            url: `${baseURL}${image.src}`,
                            description: image.alt,
                        })),
						author: {
							'@type': 'Person',
							name: person.name,
                            image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
            <MasonryGrid/>
        </Flex>
    );
}